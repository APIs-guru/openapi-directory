# RevocationDetails

Describes fields that are relavent to the revocation of a Certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**revocation_state** | **str** | Indicates why a Certificate was revoked. | [optional] 
**revocation_time** | **str** | The time at which this Certificate was revoked. | [optional] 

## Example

```python
from openapi_client.models.revocation_details import RevocationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of RevocationDetails from a JSON string
revocation_details_instance = RevocationDetails.from_json(json)
# print the JSON string representation of the object
print(RevocationDetails.to_json())

# convert the object into a dict
revocation_details_dict = revocation_details_instance.to_dict()
# create an instance of RevocationDetails from a dict
revocation_details_from_dict = RevocationDetails.from_dict(revocation_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


