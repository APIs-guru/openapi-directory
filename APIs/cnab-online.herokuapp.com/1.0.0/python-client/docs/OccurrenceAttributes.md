# OccurrenceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agency** | **str** | Retorna o número da agencia | [optional] 
**bank_tax** | **float** | Tarifa bancária | [optional] 
**charged_agency** | **str** | Retorna a agencia cobradora (com o digito) | [optional] 
**code** | **str** | Código de Ocorrência conforme o padrão CNAB | [optional] 
**code_name** | **str** | Nome do código | [optional] 
**credit_date** | **str** | Retorna a data em que o dinheiro caiu na conta | [optional] 
**discount_value** | **float** | Valor de desconto | [optional] 
**document_number** | **str** | Retorna o número do documento do boleto | [optional] 
**due_date** | **str** | Retorna a data de vencimento de boleto | [optional] 
**iof_tax** | **float** | Retorna o valor do Imposto sobre operações financeiras (IOF) | [optional] 
**is_dda** | **str** | Retorna de o boleto foi pago através do Débito Direto Autorizado | [optional] 
**is_payment** | **bool** | Retorna se é para dar baixa no boleto | [optional] 
**is_rejected_payment** | **bool** | Retorno se é uma baixa rejeitada (Ex: pedido de baixa foi rejeitado) | [optional] 
**liquidation_code** | **str** | Retorna o código de liquidação, normalmente usado para saber onde o cliente efetuou o pagamento | [optional] 
**liquidation_description** | **str** | Retorna a descrição do código de liquidação | [optional] 
**mulct_value** | **str** | Retorna o valor de juros e mora | [optional] 
**occurrence_date** | **str** | Retorna a data da ocorrencia, o dia do pagamento | [optional] 
**others_credits_value** | **float** | Retorna o valor de outros creditos | [optional] 
**our_number** | **str** | Retorna o nosso número do boleto (sem o digito) | [optional] 
**payer_allegation** | **str** | Retorna a alegação do pagador (para erros) | [optional] 
**rebate_value** | **float** | Retornna o valor dos abatimentos concedidos (depois da emissão) | [optional] 
**received_value** | **float** | Valor recebido | [optional] 
**sequencial_number** | **float** | Retorna o numero sequencial da ocorrência no arquivo | [optional] 
**title_value** | **float** | Valor do título (valor do boleto) | [optional] 
**wallet** | **str** | Retorna o número da carteira do boleto | [optional] 

## Example

```python
from openapi_client.models.occurrence_attributes import OccurrenceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of OccurrenceAttributes from a JSON string
occurrence_attributes_instance = OccurrenceAttributes.from_json(json)
# print the JSON string representation of the object
print(OccurrenceAttributes.to_json())

# convert the object into a dict
occurrence_attributes_dict = occurrence_attributes_instance.to_dict()
# create an instance of OccurrenceAttributes from a dict
occurrence_attributes_from_dict = OccurrenceAttributes.from_dict(occurrence_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


