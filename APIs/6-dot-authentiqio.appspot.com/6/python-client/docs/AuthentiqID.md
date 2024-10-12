# AuthentiqID

Authentiq ID in JWT format, self-signed. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devtoken** | **str** | device token for push messages | [optional] 
**sub** | **str** | UUID and public signing key | 

## Example

```python
from openapi_client.models.authentiq_id import AuthentiqID

# TODO update the JSON string below
json = "{}"
# create an instance of AuthentiqID from a JSON string
authentiq_id_instance = AuthentiqID.from_json(json)
# print the JSON string representation of the object
print(AuthentiqID.to_json())

# convert the object into a dict
authentiq_id_dict = authentiq_id_instance.to_dict()
# create an instance of AuthentiqID from a dict
authentiq_id_from_dict = AuthentiqID.from_dict(authentiq_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


