# ConsentStore

Represents a consent store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_consent_ttl** | **str** | Optional. Default time to live for Consents created in this store. Must be at least 24 hours. Updating this field will not affect the expiration time of existing consents. | [optional] 
**enable_consent_create_on_update** | **bool** | Optional. If &#x60;true&#x60;, UpdateConsent creates the Consent if it does not already exist. If unspecified, defaults to &#x60;false&#x60;. | [optional] 
**labels** | **Dict[str, str]** | Optional. User-supplied key-value pairs used to organize consent stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \\p{Ll}\\p{Lo}{0,62}. Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63}. No more than 64 labels can be associated with a given store. For more information: https://cloud.google.com/healthcare/docs/how-tos/labeling-resources | [optional] 
**name** | **str** | Resource name of the consent store, of the form &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}&#x60;. Cannot be changed after creation. | [optional] 

## Example

```python
from openapi_client.models.consent_store import ConsentStore

# TODO update the JSON string below
json = "{}"
# create an instance of ConsentStore from a JSON string
consent_store_instance = ConsentStore.from_json(json)
# print the JSON string representation of the object
print(ConsentStore.to_json())

# convert the object into a dict
consent_store_dict = consent_store_instance.to_dict()
# create an instance of ConsentStore from a dict
consent_store_from_dict = ConsentStore.from_dict(consent_store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


