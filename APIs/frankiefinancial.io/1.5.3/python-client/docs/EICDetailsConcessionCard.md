# EICDetailsConcessionCard

Customer concession card details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concession_evidence_type** | **str** | The type of evidence used to prove eligibility for concessions | 
**concession_type** | **str** | Concessions linked to the customer&#39;s concession card | 
**customer_reference_number** | **str** | Customer Reference Number (CRN) on the concession card | 
**end_date** | **date** | Concession card end expiry date | 
**first_name** | **str** | First name on the concession card | 
**last_name** | **str** | Last name on the concession card | 
**start_date** | **date** | Concession card start date | 

## Example

```python
from openapi_client.models.eic_details_concession_card import EICDetailsConcessionCard

# TODO update the JSON string below
json = "{}"
# create an instance of EICDetailsConcessionCard from a JSON string
eic_details_concession_card_instance = EICDetailsConcessionCard.from_json(json)
# print the JSON string representation of the object
print(EICDetailsConcessionCard.to_json())

# convert the object into a dict
eic_details_concession_card_dict = eic_details_concession_card_instance.to_dict()
# create an instance of EICDetailsConcessionCard from a dict
eic_details_concession_card_from_dict = EICDetailsConcessionCard.from_dict(eic_details_concession_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


