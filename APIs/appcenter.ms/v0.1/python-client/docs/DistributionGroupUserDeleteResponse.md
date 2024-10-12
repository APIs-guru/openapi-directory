# DistributionGroupUserDeleteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The code of the result | [optional] 
**message** | **int** | The message of the result | [optional] 
**status** | **int** | The status code of the result | 
**user_email** | **str** | The email of the user | [optional] 

## Example

```python
from openapi_client.models.distribution_group_user_delete_response import DistributionGroupUserDeleteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupUserDeleteResponse from a JSON string
distribution_group_user_delete_response_instance = DistributionGroupUserDeleteResponse.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupUserDeleteResponse.to_json())

# convert the object into a dict
distribution_group_user_delete_response_dict = distribution_group_user_delete_response_instance.to_dict()
# create an instance of DistributionGroupUserDeleteResponse from a dict
distribution_group_user_delete_response_from_dict = DistributionGroupUserDeleteResponse.from_dict(distribution_group_user_delete_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


