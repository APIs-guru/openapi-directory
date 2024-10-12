# DistributionGroupPrivateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name of the distribution group | [optional] 
**id** | **str** | The unique ID of the distribution group | 
**is_public** | **bool** | Whether the distribution group is public | 
**name** | **str** | The name of the distribution group used in URLs | 
**origin** | **str** | The creation origin of this distribution group | 
**group_type** | **str** | Type of group | [optional] 

## Example

```python
from openapi_client.models.distribution_group_private_response import DistributionGroupPrivateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupPrivateResponse from a JSON string
distribution_group_private_response_instance = DistributionGroupPrivateResponse.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupPrivateResponse.to_json())

# convert the object into a dict
distribution_group_private_response_dict = distribution_group_private_response_instance.to_dict()
# create an instance of DistributionGroupPrivateResponse from a dict
distribution_group_private_response_from_dict = DistributionGroupPrivateResponse.from_dict(distribution_group_private_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


