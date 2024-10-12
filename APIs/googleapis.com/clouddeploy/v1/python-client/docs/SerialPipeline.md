# SerialPipeline

SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stages** | [**List[Stage]**](Stage.md) | Each stage specifies configuration for a &#x60;Target&#x60;. The ordering of this list defines the promotion flow. | [optional] 

## Example

```python
from openapi_client.models.serial_pipeline import SerialPipeline

# TODO update the JSON string below
json = "{}"
# create an instance of SerialPipeline from a JSON string
serial_pipeline_instance = SerialPipeline.from_json(json)
# print the JSON string representation of the object
print(SerialPipeline.to_json())

# convert the object into a dict
serial_pipeline_dict = serial_pipeline_instance.to_dict()
# create an instance of SerialPipeline from a dict
serial_pipeline_from_dict = SerialPipeline.from_dict(serial_pipeline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


