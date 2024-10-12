# MSDeployCore

MSDeploy ARM PUT core information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_offline** | **bool** | Sets the AppOffline rule while the MSDeploy operation executes. Setting is &lt;code&gt;false&lt;/code&gt; by default. | [optional] 
**connection_string** | **str** | SQL Connection String | [optional] 
**db_type** | **str** | Database Type | [optional] 
**package_uri** | **str** | Package URI | [optional] 
**set_parameters** | **Dict[str, str]** | MSDeploy Parameters. Must not be set if SetParametersXmlFileUri is used. | [optional] 
**set_parameters_xml_file_uri** | **str** | URI of MSDeploy Parameters file. Must not be set if SetParameters is used. | [optional] 
**skip_app_data** | **bool** | Controls whether the MSDeploy operation skips the App_Data directory. If set to &lt;code&gt;true&lt;/code&gt;, the existing App_Data directory on the destination will not be deleted, and any App_Data directory in the source will be ignored. Setting is &lt;code&gt;false&lt;/code&gt; by default. | [optional] 

## Example

```python
from openapi_client.models.ms_deploy_core import MSDeployCore

# TODO update the JSON string below
json = "{}"
# create an instance of MSDeployCore from a JSON string
ms_deploy_core_instance = MSDeployCore.from_json(json)
# print the JSON string representation of the object
print(MSDeployCore.to_json())

# convert the object into a dict
ms_deploy_core_dict = ms_deploy_core_instance.to_dict()
# create an instance of MSDeployCore from a dict
ms_deploy_core_from_dict = MSDeployCore.from_dict(ms_deploy_core_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


