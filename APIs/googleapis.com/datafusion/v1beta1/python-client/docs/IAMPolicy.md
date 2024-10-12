# IAMPolicy

IAMPolicy encapsulates the IAM policy name, definition and status of policy fetching.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | [**Policy**](Policy.md) |  | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.iam_policy import IAMPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of IAMPolicy from a JSON string
iam_policy_instance = IAMPolicy.from_json(json)
# print the JSON string representation of the object
print(IAMPolicy.to_json())

# convert the object into a dict
iam_policy_dict = iam_policy_instance.to_dict()
# create an instance of IAMPolicy from a dict
iam_policy_from_dict = IAMPolicy.from_dict(iam_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


