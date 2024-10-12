# Postdeploy

Postdeploy contains the postdeploy job configuration information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **List[str]** | Optional. A sequence of Skaffold custom actions to invoke during execution of the postdeploy job. | [optional] 

## Example

```python
from openapi_client.models.postdeploy import Postdeploy

# TODO update the JSON string below
json = "{}"
# create an instance of Postdeploy from a JSON string
postdeploy_instance = Postdeploy.from_json(json)
# print the JSON string representation of the object
print(Postdeploy.to_json())

# convert the object into a dict
postdeploy_dict = postdeploy_instance.to_dict()
# create an instance of Postdeploy from a dict
postdeploy_from_dict = Postdeploy.from_dict(postdeploy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


