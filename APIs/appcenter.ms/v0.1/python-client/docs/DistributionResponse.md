# DistributionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | Status of the Request | [optional] 
**upload_id** | **str** | A unique ID of the upload | [optional] 

## Example

```python
from openapi_client.models.distribution_response import DistributionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionResponse from a JSON string
distribution_response_instance = DistributionResponse.from_json(json)
# print the JSON string representation of the object
print(DistributionResponse.to_json())

# convert the object into a dict
distribution_response_dict = distribution_response_instance.to_dict()
# create an instance of DistributionResponse from a dict
distribution_response_from_dict = DistributionResponse.from_dict(distribution_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


