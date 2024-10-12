# RepresentationContract

Operation request/response representation details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** | Specifies a registered or custom content type for this representation, e.g. application/xml. | 
**sample** | **str** | An example of the representation. | [optional] 

## Example

```python
from openapi_client.models.representation_contract import RepresentationContract

# TODO update the JSON string below
json = "{}"
# create an instance of RepresentationContract from a JSON string
representation_contract_instance = RepresentationContract.from_json(json)
# print the JSON string representation of the object
print(RepresentationContract.to_json())

# convert the object into a dict
representation_contract_dict = representation_contract_instance.to_dict()
# create an instance of RepresentationContract from a dict
representation_contract_from_dict = RepresentationContract.from_dict(representation_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


