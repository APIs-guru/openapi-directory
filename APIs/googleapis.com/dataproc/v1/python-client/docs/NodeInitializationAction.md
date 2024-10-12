# NodeInitializationAction

Specifies an executable to run on a fully configured node and a timeout period for executable completion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**executable_file** | **str** | Required. Cloud Storage URI of executable file. | [optional] 
**execution_timeout** | **str** | Optional. Amount of time executable has to complete. Default is 10 minutes (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period. | [optional] 

## Example

```python
from openapi_client.models.node_initialization_action import NodeInitializationAction

# TODO update the JSON string below
json = "{}"
# create an instance of NodeInitializationAction from a JSON string
node_initialization_action_instance = NodeInitializationAction.from_json(json)
# print the JSON string representation of the object
print(NodeInitializationAction.to_json())

# convert the object into a dict
node_initialization_action_dict = node_initialization_action_instance.to_dict()
# create an instance of NodeInitializationAction from a dict
node_initialization_action_from_dict = NodeInitializationAction.from_dict(node_initialization_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


