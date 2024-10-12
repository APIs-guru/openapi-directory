# Application


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived** | **bool** |  | [default to False]
**branch** | **str** |  | 
**build_flavor** | [**Flavor**](Flavor.md) |  | 
**cancel_on_push** | **bool** |  | [default to False]
**commit_id** | **str** |  | 
**creation_date** | **date** |  | 
**deploy_url** | **str** |  | 
**deployment** | [**Deployment**](Deployment.md) |  | 
**description** | **str** |  | 
**favourite** | **bool** |  | [default to False]
**homogeneous** | **bool** |  | [default to False]
**id** | **str** |  | 
**instance** | [**Instance**](Instance.md) |  | 
**last_deploy** | **int** |  | 
**name** | **str** |  | 
**owner_id** | **str** |  | 
**separate_build** | **bool** |  | [default to False]
**state** | **str** |  | 
**sticky_sessions** | **bool** |  | [default to False]
**vhosts** | [**List[Vhost]**](Vhost.md) |  | 
**webhook_secret** | **str** |  | 
**webhook_url** | **str** |  | 
**zone** | **str** | &#x60;par&#x60; ou &#x60;mtl&#x60; | 

## Example

```python
from openapi_client.models.application import Application

# TODO update the JSON string below
json = "{}"
# create an instance of Application from a JSON string
application_instance = Application.from_json(json)
# print the JSON string representation of the object
print(Application.to_json())

# convert the object into a dict
application_dict = application_instance.to_dict()
# create an instance of Application from a dict
application_from_dict = Application.from_dict(application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


