# PublicDistributionGroupsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the distribution group | 

## Example

```python
from openapi_client.models.public_distribution_groups_response import PublicDistributionGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PublicDistributionGroupsResponse from a JSON string
public_distribution_groups_response_instance = PublicDistributionGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(PublicDistributionGroupsResponse.to_json())

# convert the object into a dict
public_distribution_groups_response_dict = public_distribution_groups_response_instance.to_dict()
# create an instance of PublicDistributionGroupsResponse from a dict
public_distribution_groups_response_from_dict = PublicDistributionGroupsResponse.from_dict(public_distribution_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


