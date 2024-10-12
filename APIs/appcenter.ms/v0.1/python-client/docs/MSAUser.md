# MSAUser

an MSA user's hex CID

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hexcid** | **str** | the user&#39;s CID | 

## Example

```python
from openapi_client.models.msa_user import MSAUser

# TODO update the JSON string below
json = "{}"
# create an instance of MSAUser from a JSON string
msa_user_instance = MSAUser.from_json(json)
# print the JSON string representation of the object
print(MSAUser.to_json())

# convert the object into a dict
msa_user_dict = msa_user_instance.to_dict()
# create an instance of MSAUser from a dict
msa_user_from_dict = MSAUser.from_dict(msa_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


