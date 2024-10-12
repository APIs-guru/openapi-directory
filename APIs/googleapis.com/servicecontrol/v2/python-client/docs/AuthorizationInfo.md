# AuthorizationInfo

Authorization information for the operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**granted** | **bool** | Whether or not authorization for &#x60;resource&#x60; and &#x60;permission&#x60; was granted. | [optional] 
**permission** | **str** | The required IAM permission. | [optional] 
**resource** | **str** | The resource being accessed, as a REST-style or cloud resource string. For example: bigquery.googleapis.com/projects/PROJECTID/datasets/DATASETID or projects/PROJECTID/datasets/DATASETID | [optional] 
**resource_attributes** | [**Resource**](Resource.md) |  | [optional] 

## Example

```python
from openapi_client.models.authorization_info import AuthorizationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationInfo from a JSON string
authorization_info_instance = AuthorizationInfo.from_json(json)
# print the JSON string representation of the object
print(AuthorizationInfo.to_json())

# convert the object into a dict
authorization_info_dict = authorization_info_instance.to_dict()
# create an instance of AuthorizationInfo from a dict
authorization_info_from_dict = AuthorizationInfo.from_dict(authorization_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


