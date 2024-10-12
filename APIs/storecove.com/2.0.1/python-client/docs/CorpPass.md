# CorpPass


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_redirect_fail_url** | **str** | The URL the CorpPass system will redirect to in case of a failure to perform identity verfication. | [optional] 
**client_redirect_success_url** | **str** | The URL the CorpPass system will redirect to in case of successful identity verfication. | [optional] 
**corppass_url** | **str** | The CorpPass redirect URL. | [optional] 
**enabled** | **bool** | Whether or not the CorpPass flow is enabled. | [optional] [default to False]
**flow_type** | **str** | The CorpPass flow type. | [optional] 
**signer_email** | **str** | The email of the person who is going to perform the CorpPass process. | [optional] 
**signer_name** | **str** | The name of the person who is going to perform the CorpPass process. | [optional] 
**simulate_corppass** | **bool** | Whether or not CorpPass is being simulated. | [optional] [default to False]
**status** | **str** | The status of the CorpPass process. | [optional] 

## Example

```python
from openapi_client.models.corp_pass import CorpPass

# TODO update the JSON string below
json = "{}"
# create an instance of CorpPass from a JSON string
corp_pass_instance = CorpPass.from_json(json)
# print the JSON string representation of the object
print(CorpPass.to_json())

# convert the object into a dict
corp_pass_dict = corp_pass_instance.to_dict()
# create an instance of CorpPass from a dict
corp_pass_from_dict = CorpPass.from_dict(corp_pass_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


