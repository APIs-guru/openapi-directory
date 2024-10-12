# ExternalId

An identifier from an external entity related to the person.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formatted_type** | **str** | Output only. The type of the event translated and formatted in the viewer&#39;s account locale or the &#x60;Accept-Language&#x60; HTTP header locale. | [optional] [readonly] 
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**type** | **str** | The type of the external ID. The type can be custom or one of these predefined values: * &#x60;account&#x60; * &#x60;customer&#x60; * &#x60;loginId&#x60; * &#x60;network&#x60; * &#x60;organization&#x60; | [optional] 
**value** | **str** | The value of the external ID. | [optional] 

## Example

```python
from openapi_client.models.external_id import ExternalId

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalId from a JSON string
external_id_instance = ExternalId.from_json(json)
# print the JSON string representation of the object
print(ExternalId.to_json())

# convert the object into a dict
external_id_dict = external_id_instance.to_dict()
# create an instance of ExternalId from a dict
external_id_from_dict = ExternalId.from_dict(external_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


