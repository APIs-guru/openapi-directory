# RepresentationContract

Operation request/response representation details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** | Specifies a registered or custom content type for this representation, e.g. application/xml. | 
**form_parameters** | [**List[ParameterContract]**](ParameterContract.md) | Collection of form parameters. Required if &#39;contentType&#39; value is either &#39;application/x-www-form-urlencoded&#39; or &#39;multipart/form-data&#39;.. | [optional] 
**sample** | **str** | An example of the representation. | [optional] 
**schema_id** | **str** | Schema identifier. Applicable only if &#39;contentType&#39; value is neither &#39;application/x-www-form-urlencoded&#39; nor &#39;multipart/form-data&#39;. | [optional] 
**type_name** | **str** | Type name defined by the schema. Applicable only if &#39;contentType&#39; value is neither &#39;application/x-www-form-urlencoded&#39; nor &#39;multipart/form-data&#39;. | [optional] 

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


