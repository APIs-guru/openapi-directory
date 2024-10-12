# CampaignsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**PaginatedResponseError**](PaginatedResponseError.md) |  | [optional] 
**pagination** | [**PaginatedResponsePagination**](PaginatedResponsePagination.md) |  | [optional] 
**success** | **bool** |  | [optional] 
**data** | [**List[Campaign]**](Campaign.md) |  | [optional] 

## Example

```python
from openapi_client.models.campaigns_response import CampaignsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignsResponse from a JSON string
campaigns_response_instance = CampaignsResponse.from_json(json)
# print the JSON string representation of the object
print(CampaignsResponse.to_json())

# convert the object into a dict
campaigns_response_dict = campaigns_response_instance.to_dict()
# create an instance of CampaignsResponse from a dict
campaigns_response_from_dict = CampaignsResponse.from_dict(campaigns_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


