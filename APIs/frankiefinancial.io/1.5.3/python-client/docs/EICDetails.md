# EICDetails

Information for the residents of the property being supplied

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concession_card** | [**EICDetailsConcessionCard**](EICDetailsConcessionCard.md) |  | [optional] 
**vulnerabilities** | [**EICDetailsVulnerabilities**](EICDetailsVulnerabilities.md) |  | [optional] 

## Example

```python
from openapi_client.models.eic_details import EICDetails

# TODO update the JSON string below
json = "{}"
# create an instance of EICDetails from a JSON string
eic_details_instance = EICDetails.from_json(json)
# print the JSON string representation of the object
print(EICDetails.to_json())

# convert the object into a dict
eic_details_dict = eic_details_instance.to_dict()
# create an instance of EICDetails from a dict
eic_details_from_dict = EICDetails.from_dict(eic_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


