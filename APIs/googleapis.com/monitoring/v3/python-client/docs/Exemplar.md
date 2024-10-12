# Exemplar

Exemplars are example points that may be used to annotate aggregated distribution values. They are metadata that gives information about a particular value added to a Distribution bucket, such as a trace ID that was active when a value was added. They may contain further information, such as a example values and timestamps, origin, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | **List[Dict[str, object]]** | Contextual information about the example value. Examples are:Trace: type.googleapis.com/google.monitoring.v3.SpanContextLiteral string: type.googleapis.com/google.protobuf.StringValueLabels dropped during aggregation: type.googleapis.com/google.monitoring.v3.DroppedLabelsThere may be only a single attachment of any given message type in a single exemplar, and this is enforced by the system. | [optional] 
**timestamp** | **str** | The observation (sampling) time of the above value. | [optional] 
**value** | **float** | Value of the exemplar point. This value determines to which bucket the exemplar belongs. | [optional] 

## Example

```python
from openapi_client.models.exemplar import Exemplar

# TODO update the JSON string below
json = "{}"
# create an instance of Exemplar from a JSON string
exemplar_instance = Exemplar.from_json(json)
# print the JSON string representation of the object
print(Exemplar.to_json())

# convert the object into a dict
exemplar_dict = exemplar_instance.to_dict()
# create an instance of Exemplar from a dict
exemplar_from_dict = Exemplar.from_dict(exemplar_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


