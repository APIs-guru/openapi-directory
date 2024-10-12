# ConsumerProject

Represents a consumer project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_num** | **str** | Required. Project number of the consumer that is launching the service instance. It can own the network that is peered with Google or, be a service project in an XPN where the host project has the network. | [optional] 

## Example

```python
from openapi_client.models.consumer_project import ConsumerProject

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerProject from a JSON string
consumer_project_instance = ConsumerProject.from_json(json)
# print the JSON string representation of the object
print(ConsumerProject.to_json())

# convert the object into a dict
consumer_project_dict = consumer_project_instance.to_dict()
# create an instance of ConsumerProject from a dict
consumer_project_from_dict = ConsumerProject.from_dict(consumer_project_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


