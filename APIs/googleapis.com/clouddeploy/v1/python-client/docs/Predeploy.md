# Predeploy

Predeploy contains the predeploy job configuration information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **List[str]** | Optional. A sequence of Skaffold custom actions to invoke during execution of the predeploy job. | [optional] 

## Example

```python
from openapi_client.models.predeploy import Predeploy

# TODO update the JSON string below
json = "{}"
# create an instance of Predeploy from a JSON string
predeploy_instance = Predeploy.from_json(json)
# print the JSON string representation of the object
print(Predeploy.to_json())

# convert the object into a dict
predeploy_dict = predeploy_instance.to_dict()
# create an instance of Predeploy from a dict
predeploy_from_dict = Predeploy.from_dict(predeploy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


