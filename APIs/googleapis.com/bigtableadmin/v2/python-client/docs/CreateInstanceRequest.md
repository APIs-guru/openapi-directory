# CreateInstanceRequest

Request message for BigtableInstanceAdmin.CreateInstance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clusters** | [**Dict[str, Cluster]**](Cluster.md) | Required. The clusters to be created within the instance, mapped by desired cluster ID, e.g., just &#x60;mycluster&#x60; rather than &#x60;projects/myproject/instances/myinstance/clusters/mycluster&#x60;. Fields marked &#x60;OutputOnly&#x60; must be left blank. | [optional] 
**instance** | [**Instance**](Instance.md) |  | [optional] 
**instance_id** | **str** | Required. The ID to be used when referring to the new instance within its project, e.g., just &#x60;myinstance&#x60; rather than &#x60;projects/myproject/instances/myinstance&#x60;. | [optional] 
**parent** | **str** | Required. The unique name of the project in which to create the new instance. Values are of the form &#x60;projects/{project}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.create_instance_request import CreateInstanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateInstanceRequest from a JSON string
create_instance_request_instance = CreateInstanceRequest.from_json(json)
# print the JSON string representation of the object
print(CreateInstanceRequest.to_json())

# convert the object into a dict
create_instance_request_dict = create_instance_request_instance.to_dict()
# create an instance of CreateInstanceRequest from a dict
create_instance_request_from_dict = CreateInstanceRequest.from_dict(create_instance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


