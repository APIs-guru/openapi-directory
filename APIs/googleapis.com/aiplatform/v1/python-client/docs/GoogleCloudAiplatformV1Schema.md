# GoogleCloudAiplatformV1Schema

Schema is used to define the format of input/output data. Represents a select subset of an [OpenAPI 3.0 schema object](https://spec.openapis.org/oas/v3.0.3#schema). More fields may be added in the future as needed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. The description of the data. | [optional] 
**enum** | **List[str]** | Optional. Possible values of the element of Type.STRING with enum format. For example we can define an Enum Direction as : {type:STRING, format:enum, enum:[\&quot;EAST\&quot;, NORTH\&quot;, \&quot;SOUTH\&quot;, \&quot;WEST\&quot;]} | [optional] 
**example** | **object** | Optional. Example of the object. Will only populated when the object is the root. | [optional] 
**format** | **str** | Optional. The format of the data. Supported formats: for NUMBER type: float, double for INTEGER type: int32, int64 | [optional] 
**items** | [**GoogleCloudAiplatformV1Schema**](GoogleCloudAiplatformV1Schema.md) |  | [optional] 
**nullable** | **bool** | Optional. Indicates if the value may be null. | [optional] 
**properties** | [**Dict[str, GoogleCloudAiplatformV1Schema]**](GoogleCloudAiplatformV1Schema.md) | Optional. Properties of Type.OBJECT. | [optional] 
**required** | **List[str]** | Optional. Required properties of Type.OBJECT. | [optional] 
**type** | **str** | Optional. The type of the data. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema import GoogleCloudAiplatformV1Schema

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1Schema from a JSON string
google_cloud_aiplatform_v1_schema_instance = GoogleCloudAiplatformV1Schema.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1Schema.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_dict = google_cloud_aiplatform_v1_schema_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1Schema from a dict
google_cloud_aiplatform_v1_schema_from_dict = GoogleCloudAiplatformV1Schema.from_dict(google_cloud_aiplatform_v1_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


