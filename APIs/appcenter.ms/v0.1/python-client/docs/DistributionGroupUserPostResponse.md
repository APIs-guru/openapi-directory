# DistributionGroupUserPostResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The code of the result | [optional] 
**invite_pending** | **bool** | Whether the has accepted the invite. Available when an invite is pending, and the value will be \&quot;true\&quot;. | [optional] 
**message** | **str** | The message of the result | [optional] 
**status** | **int** | The status code of the result | 
**user_email** | **str** | The email of the user | [optional] 

## Example

```python
from openapi_client.models.distribution_group_user_post_response import DistributionGroupUserPostResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupUserPostResponse from a JSON string
distribution_group_user_post_response_instance = DistributionGroupUserPostResponse.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupUserPostResponse.to_json())

# convert the object into a dict
distribution_group_user_post_response_dict = distribution_group_user_post_response_instance.to_dict()
# create an instance of DistributionGroupUserPostResponse from a dict
distribution_group_user_post_response_from_dict = DistributionGroupUserPostResponse.from_dict(distribution_group_user_post_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


