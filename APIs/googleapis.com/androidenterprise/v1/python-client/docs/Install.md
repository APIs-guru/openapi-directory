# Install

The existence of an Installs resource indicates that an app is installed on a particular device (or that an install is pending). The API can be used to create an install resource using the update method. This triggers the actual install of the app on the device. If the user does not already have an entitlement for the app, then an attempt is made to create one. If this fails (for example, because the app is not free and there is no available license), then the creation of the install fails. The API can also be used to update an installed app. If the update method is used on an existing install, then the app will be updated to the latest available version. Note that it is not possible to force the installation of a specific version of an app: the version code is read-only. If a user installs an app themselves (as permitted by the enterprise), then again an install resource and possibly an entitlement resource are automatically created. The API can also be used to delete an install resource, which triggers the removal of the app from the device. Note that deleting an install does not automatically remove the corresponding entitlement, even if there are no remaining installs. The install resource will also be deleted if the user uninstalls the app themselves.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**install_state** | **str** | Install state. The state \&quot;installPending\&quot; means that an install request has recently been made and download to the device is in progress. The state \&quot;installed\&quot; means that the app has been installed. This field is read-only. | [optional] 
**product_id** | **str** | The ID of the product that the install is for. For example, \&quot;app:com.google.android.gm\&quot;. | [optional] 
**version_code** | **int** | The version of the installed product. Guaranteed to be set only if the install state is \&quot;installed\&quot;. | [optional] 

## Example

```python
from openapi_client.models.install import Install

# TODO update the JSON string below
json = "{}"
# create an instance of Install from a JSON string
install_instance = Install.from_json(json)
# print the JSON string representation of the object
print(Install.to_json())

# convert the object into a dict
install_dict = install_instance.to_dict()
# create an instance of Install from a dict
install_from_dict = Install.from_dict(install_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


