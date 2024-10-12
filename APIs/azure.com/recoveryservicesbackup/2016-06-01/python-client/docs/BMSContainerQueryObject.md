# BMSContainerQueryObject

The query filters that can be used with the list containers API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_management_type** | **str** | The backup management type for this container. | [optional] 
**friendly_name** | **str** | The friendly name of the container. | [optional] 
**status** | **str** | The status of the container&#39;s registration with the Recovery Services vault. | [optional] 

## Example

```python
from openapi_client.models.bms_container_query_object import BMSContainerQueryObject

# TODO update the JSON string below
json = "{}"
# create an instance of BMSContainerQueryObject from a JSON string
bms_container_query_object_instance = BMSContainerQueryObject.from_json(json)
# print the JSON string representation of the object
print(BMSContainerQueryObject.to_json())

# convert the object into a dict
bms_container_query_object_dict = bms_container_query_object_instance.to_dict()
# create an instance of BMSContainerQueryObject from a dict
bms_container_query_object_from_dict = BMSContainerQueryObject.from_dict(bms_container_query_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


