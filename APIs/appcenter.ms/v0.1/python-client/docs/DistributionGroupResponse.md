# DistributionGroupResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name of the distribution group | [optional] 
**id** | **str** | The unique ID of the distribution group | 
**is_public** | **bool** | Whether the distribution group is public | 
**name** | **str** | The name of the distribution group used in URLs | 
**origin** | **str** | The creation origin of this distribution group | 

## Example

```python
from openapi_client.models.distribution_group_response import DistributionGroupResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupResponse from a JSON string
distribution_group_response_instance = DistributionGroupResponse.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupResponse.to_json())

# convert the object into a dict
distribution_group_response_dict = distribution_group_response_instance.to_dict()
# create an instance of DistributionGroupResponse from a dict
distribution_group_response_from_dict = DistributionGroupResponse.from_dict(distribution_group_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


