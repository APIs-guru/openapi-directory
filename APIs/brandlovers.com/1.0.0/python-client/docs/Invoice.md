# Invoice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | **str** | Número da chave de acesso à nota fiscal. A chave possui 44 dígitos e contém todas as informações da DANFE | 
**cnpj** | **str** | CNPJ responsável pelo envio dos produtos. Pode ser diferente caso a empresa possua diversos Centros de Distribuição (CDs) | [optional] 
**issued_at** | **datetime** | Data de emissão da Nota Fiscal | [optional] 
**link_danfe** | **str** | Url para consulta da DANFE | [optional] 
**link_xml** | **str** | Url para consulta da NFE | [optional] 
**number** | **str** | Número da Nota Fiscal | 
**serie** | **str** | Número de serie da Nota Fiscal | 

## Example

```python
from openapi_client.models.invoice import Invoice

# TODO update the JSON string below
json = "{}"
# create an instance of Invoice from a JSON string
invoice_instance = Invoice.from_json(json)
# print the JSON string representation of the object
print(Invoice.to_json())

# convert the object into a dict
invoice_dict = invoice_instance.to_dict()
# create an instance of Invoice from a dict
invoice_from_dict = Invoice.from_dict(invoice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


