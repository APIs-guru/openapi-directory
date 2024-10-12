# GeneralDistributionGroupDetailsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name of the distribution group | [optional] 
**id** | **str** | The unique ID of the distribution group | 
**is_public** | **bool** | Whether the distribution group is public | 
**name** | **str** | The name of the distribution group used in URLs | 
**origin** | **str** | The creation origin of this distribution group | 
**is_shared** | **bool** | Whether the distribution group is shared group or not | 
**owner_app_id** | **str** | If distribution group is owned by an app, this is the unique app ID | [optional] 
**owner_org_id** | **str** | If distribution group is owned by an org, this is the unique org ID | [optional] 

## Example

```python
from openapi_client.models.general_distribution_group_details_response import GeneralDistributionGroupDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GeneralDistributionGroupDetailsResponse from a JSON string
general_distribution_group_details_response_instance = GeneralDistributionGroupDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(GeneralDistributionGroupDetailsResponse.to_json())

# convert the object into a dict
general_distribution_group_details_response_dict = general_distribution_group_details_response_instance.to_dict()
# create an instance of GeneralDistributionGroupDetailsResponse from a dict
general_distribution_group_details_response_from_dict = GeneralDistributionGroupDetailsResponse.from_dict(general_distribution_group_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


