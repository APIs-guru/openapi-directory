# JavaSettings

Settings for Java client libraries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common** | [**CommonLanguageSettings**](CommonLanguageSettings.md) |  | [optional] 
**library_package** | **str** | The package name to use in Java. Clobbers the java_package option set in the protobuf. This should be used **only** by APIs who have already set the language_settings.java.package_name\&quot; field in gapic.yaml. API teams should use the protobuf java_package option where possible. Example of a YAML configuration:: publishing: java_settings: library_package: com.google.cloud.pubsub.v1 | [optional] 
**service_class_names** | **Dict[str, str]** | Configure the Java class name to use instead of the service&#39;s for its corresponding generated GAPIC client. Keys are fully-qualified service names as they appear in the protobuf (including the full the language_settings.java.interface_names\&quot; field in gapic.yaml. API teams should otherwise use the service name as it appears in the protobuf. Example of a YAML configuration:: publishing: java_settings: service_class_names: - google.pubsub.v1.Publisher: TopicAdmin - google.pubsub.v1.Subscriber: SubscriptionAdmin | [optional] 

## Example

```python
from openapi_client.models.java_settings import JavaSettings

# TODO update the JSON string below
json = "{}"
# create an instance of JavaSettings from a JSON string
java_settings_instance = JavaSettings.from_json(json)
# print the JSON string representation of the object
print(JavaSettings.to_json())

# convert the object into a dict
java_settings_dict = java_settings_instance.to_dict()
# create an instance of JavaSettings from a dict
java_settings_from_dict = JavaSettings.from_dict(java_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


