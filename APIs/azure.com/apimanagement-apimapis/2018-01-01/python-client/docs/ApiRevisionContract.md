# ApiRevisionContract

Summary of revision metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_id** | **str** | Identifier of the API Revision. | [optional] [readonly] 
**api_revision** | **str** | Revision number of API. | [optional] [readonly] 
**created_date_time** | **datetime** | The time the API Revision was created. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard. | [optional] [readonly] 
**description** | **str** | Description of the API Revision. | [optional] [readonly] 
**is_current** | **bool** | Indicates if API revision is accessible via the gateway. | [optional] [readonly] 
**is_online** | **bool** | Indicates if API revision is the current api revision. | [optional] [readonly] 
**private_url** | **str** | Gateway URL for accessing the non-current API Revision. | [optional] [readonly] 
**updated_date_time** | **datetime** | The time the API Revision were updated. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_revision_contract import ApiRevisionContract

# TODO update the JSON string below
json = "{}"
# create an instance of ApiRevisionContract from a JSON string
api_revision_contract_instance = ApiRevisionContract.from_json(json)
# print the JSON string representation of the object
print(ApiRevisionContract.to_json())

# convert the object into a dict
api_revision_contract_dict = api_revision_contract_instance.to_dict()
# create an instance of ApiRevisionContract from a dict
api_revision_contract_from_dict = ApiRevisionContract.from_dict(api_revision_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


