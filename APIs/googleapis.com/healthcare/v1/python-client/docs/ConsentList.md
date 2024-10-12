# ConsentList

List of resource names of Consent resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consents** | **List[str]** | The resource names of the Consents to evaluate against, of the form &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.consent_list import ConsentList

# TODO update the JSON string below
json = "{}"
# create an instance of ConsentList from a JSON string
consent_list_instance = ConsentList.from_json(json)
# print the JSON string representation of the object
print(ConsentList.to_json())

# convert the object into a dict
consent_list_dict = consent_list_instance.to_dict()
# create an instance of ConsentList from a dict
consent_list_from_dict = ConsentList.from_dict(consent_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


