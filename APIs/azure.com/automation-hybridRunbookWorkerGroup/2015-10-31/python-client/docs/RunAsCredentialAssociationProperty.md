# RunAsCredentialAssociationProperty

Definition of RunAs credential to use for hybrid worker.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the credential. | [optional] 

## Example

```python
from openapi_client.models.run_as_credential_association_property import RunAsCredentialAssociationProperty

# TODO update the JSON string below
json = "{}"
# create an instance of RunAsCredentialAssociationProperty from a JSON string
run_as_credential_association_property_instance = RunAsCredentialAssociationProperty.from_json(json)
# print the JSON string representation of the object
print(RunAsCredentialAssociationProperty.to_json())

# convert the object into a dict
run_as_credential_association_property_dict = run_as_credential_association_property_instance.to_dict()
# create an instance of RunAsCredentialAssociationProperty from a dict
run_as_credential_association_property_from_dict = RunAsCredentialAssociationProperty.from_dict(run_as_credential_association_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


