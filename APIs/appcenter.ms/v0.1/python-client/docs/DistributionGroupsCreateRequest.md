# DistributionGroupsCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the distribution group. If not specified, the name will be used. | [optional] 
**name** | **str** | The name of the distribution group | 

## Example

```python
from openapi_client.models.distribution_groups_create_request import DistributionGroupsCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupsCreateRequest from a JSON string
distribution_groups_create_request_instance = DistributionGroupsCreateRequest.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupsCreateRequest.to_json())

# convert the object into a dict
distribution_groups_create_request_dict = distribution_groups_create_request_instance.to_dict()
# create an instance of DistributionGroupsCreateRequest from a dict
distribution_groups_create_request_from_dict = DistributionGroupsCreateRequest.from_dict(distribution_groups_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


