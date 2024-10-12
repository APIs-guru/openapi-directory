# CorpPassCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_redirect_fail_url** | **str** | The URL the CorpPass system will redirect to in case of a failure to perform identity verfication. Mandatory for flow_type&#x3D;\&quot;corppass_flow_redirect\&quot; | [optional] 
**client_redirect_success_url** | **str** | The URL the CorpPass system will redirect to in case of successful identity verfication. Mandatory for flow_type&#x3D;\&quot;corppass_flow_redirect\&quot; | [optional] 
**enabled** | **bool** | DEPRECATED. Whether or not to enable the CorpPass flow. Must be true if provided. | [optional] [default to True]
**flow_type** | **str** | The CorpPass flow type. | 
**signer_email** | **str** | The email of the person who is going to perform the CorpPass process. Mandatory for flow_type&#x3D;\&quot;corppass_flow_email\&quot; | [optional] 
**signer_name** | **str** | The name of the person who is going to perform the CorpPass process. Mandatory for flow_type&#x3D;\&quot;corppass_flow_email\&quot; | [optional] 
**simulate_corppass** | **bool** | Whether or not to simulate CorpPass. Instead of redirecting to a CorpPass URL, you will receive a redirect to a Storecove URL which will show a page with two buttons: success and fail. This makes development without having test CorpPass credentials possible. Note this only works in sandbox, not in the production environment. | [optional] [default to False]

## Example

```python
from openapi_client.models.corp_pass_create import CorpPassCreate

# TODO update the JSON string below
json = "{}"
# create an instance of CorpPassCreate from a JSON string
corp_pass_create_instance = CorpPassCreate.from_json(json)
# print the JSON string representation of the object
print(CorpPassCreate.to_json())

# convert the object into a dict
corp_pass_create_dict = corp_pass_create_instance.to_dict()
# create an instance of CorpPassCreate from a dict
corp_pass_create_from_dict = CorpPassCreate.from_dict(corp_pass_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


