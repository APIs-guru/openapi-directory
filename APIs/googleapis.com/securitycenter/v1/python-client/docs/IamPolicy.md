# IamPolicy

Cloud IAM Policy information associated with the Google Cloud resource described by the Security Command Center asset. This information is managed and defined by the Google Cloud resource and cannot be modified by the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_blob** | **str** | The JSON representation of the Policy associated with the asset. See https://cloud.google.com/iam/reference/rest/v1/Policy for format details. | [optional] 

## Example

```python
from openapi_client.models.iam_policy import IamPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of IamPolicy from a JSON string
iam_policy_instance = IamPolicy.from_json(json)
# print the JSON string representation of the object
print(IamPolicy.to_json())

# convert the object into a dict
iam_policy_dict = iam_policy_instance.to_dict()
# create an instance of IamPolicy from a dict
iam_policy_from_dict = IamPolicy.from_dict(iam_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


