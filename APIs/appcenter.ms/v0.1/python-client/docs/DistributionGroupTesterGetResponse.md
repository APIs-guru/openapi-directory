# DistributionGroupTesterGetResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The full name of the tester. Might for example be first and last name | [optional] 
**email** | **str** | The email address of the tester | 
**name** | **str** | The unique name that is used to identify the tester. | 

## Example

```python
from openapi_client.models.distribution_group_tester_get_response import DistributionGroupTesterGetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupTesterGetResponse from a JSON string
distribution_group_tester_get_response_instance = DistributionGroupTesterGetResponse.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupTesterGetResponse.to_json())

# convert the object into a dict
distribution_group_tester_get_response_dict = distribution_group_tester_get_response_instance.to_dict()
# create an instance of DistributionGroupTesterGetResponse from a dict
distribution_group_tester_get_response_from_dict = DistributionGroupTesterGetResponse.from_dict(distribution_group_tester_get_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


