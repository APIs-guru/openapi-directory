# EnrichmentProperties

The properties of an enrichment that your IoT hub applies to messages delivered to endpoints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_names** | **List[str]** | The list of endpoints for which the enrichment is applied to the message. | 
**key** | **str** | The key or name for the enrichment property. | 
**value** | **str** | The value for the enrichment property. | 

## Example

```python
from openapi_client.models.enrichment_properties import EnrichmentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EnrichmentProperties from a JSON string
enrichment_properties_instance = EnrichmentProperties.from_json(json)
# print the JSON string representation of the object
print(EnrichmentProperties.to_json())

# convert the object into a dict
enrichment_properties_dict = enrichment_properties_instance.to_dict()
# create an instance of EnrichmentProperties from a dict
enrichment_properties_from_dict = EnrichmentProperties.from_dict(enrichment_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


