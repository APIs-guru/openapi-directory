# SupernovaInstanceView


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | Identifier of running app/add-on | [optional] 
**app_port** | **float** | Port of the HV that&#39;s redirected to 8080 on VM | 
**commit_id** | **str** |  | [optional] 
**created_at** | **float** | Integer unix timestamp | [optional] 
**deploy_id** | **str** |  | [optional] 
**deploy_number** | **float** |  | [optional] 
**display_name** | **str** | Generated PokéName. This name is generated from the uuid. | [optional] 
**flavor** | [**SupernovaInstanceViewFlavor**](SupernovaInstanceViewFlavor.md) |  | 
**hv** | **str** | String name of hv. | 
**image** | **str** | Base system image. E.g. java-20181030, node-20180912… | 
**instance_number** | **float** |  | [optional] 
**internal_ip** | **str** |  | [optional] 
**ip** | **str** | Public IP of the HV | 
**owner_id** | **str** | Identifier of the owner of the app/add-on running | [optional] 
**source** | **str** | Who/what started this instance? E.g. \&quot;app\&quot;, \&quot;cli\&quot; | 
**ssh_port** | **float** | Port of the HV that&#39;s redirected to 22 on VM | [optional] 
**state** | **str** |  | [optional] 
**uuid** | **str** |  | 
**zabbix_port** | **float** | Port of the HV that&#39;s redirected to 10050 on VM | 
**zone** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.supernova_instance_view import SupernovaInstanceView

# TODO update the JSON string below
json = "{}"
# create an instance of SupernovaInstanceView from a JSON string
supernova_instance_view_instance = SupernovaInstanceView.from_json(json)
# print the JSON string representation of the object
print(SupernovaInstanceView.to_json())

# convert the object into a dict
supernova_instance_view_dict = supernova_instance_view_instance.to_dict()
# create an instance of SupernovaInstanceView from a dict
supernova_instance_view_from_dict = SupernovaInstanceView.from_dict(supernova_instance_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


