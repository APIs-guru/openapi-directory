# ApplicationPublishObject

Object model for publishing a specific application version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_staging** | **bool** | Indicates if the staging slot should be used, instead of the Production one. | [optional] [default to False]
**region** | **str** | The target region that the application is published to. | [optional] 
**version_id** | **str** | The version ID to publish. | [optional] 

## Example

```python
from openapi_client.models.application_publish_object import ApplicationPublishObject

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPublishObject from a JSON string
application_publish_object_instance = ApplicationPublishObject.from_json(json)
# print the JSON string representation of the object
print(ApplicationPublishObject.to_json())

# convert the object into a dict
application_publish_object_dict = application_publish_object_instance.to_dict()
# create an instance of ApplicationPublishObject from a dict
application_publish_object_from_dict = ApplicationPublishObject.from_dict(application_publish_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


