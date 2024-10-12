# ModelProperty

A key-value pair attached to a file that is either public or private to an application. The following limits apply to file properties: * Maximum of 100 properties total per file * Maximum of 30 private properties per app * Maximum of 30 public properties * Maximum of 124 bytes size limit on (key + value) string in UTF-8 encoding for a single property Some resource methods (such as `properties.update`) require a `propertyKey`. Use the `properties.list` method to retrieve the key for a property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Output only. ETag of the property. | [optional] 
**key** | **str** | The key of this property. | [optional] 
**kind** | **str** | Output only. This is always &#x60;drive#property&#x60;. | [optional] [default to 'drive#property']
**self_link** | **str** | Output only. The link back to this property. | [optional] 
**value** | **str** | The value of this property. | [optional] 
**visibility** | **str** | The visibility of this property. Allowed values are PRIVATE (default) and PUBLIC. Private properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties. | [optional] 

## Example

```python
from openapi_client.models.model_property import ModelProperty

# TODO update the JSON string below
json = "{}"
# create an instance of ModelProperty from a JSON string
model_property_instance = ModelProperty.from_json(json)
# print the JSON string representation of the object
print(ModelProperty.to_json())

# convert the object into a dict
model_property_dict = model_property_instance.to_dict()
# create an instance of ModelProperty from a dict
model_property_from_dict = ModelProperty.from_dict(model_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


