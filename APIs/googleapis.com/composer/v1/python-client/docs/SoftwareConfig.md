# SoftwareConfig

Specifies the selection and configuration of software inside the environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airflow_config_overrides** | **Dict[str, str]** | Optional. Apache Airflow configuration properties to override. Property keys contain the section and property names, separated by a hyphen, for example \&quot;core-dags_are_paused_at_creation\&quot;. Section names must not contain hyphens (\&quot;-\&quot;), opening square brackets (\&quot;[\&quot;), or closing square brackets (\&quot;]\&quot;). The property name must not be empty and must not contain an equals sign (\&quot;&#x3D;\&quot;) or semicolon (\&quot;;\&quot;). Section and property names must not contain a period (\&quot;.\&quot;). Apache Airflow configuration property names must be written in [snake_case](https://en.wikipedia.org/wiki/Snake_case). Property values can contain any character, and can be written in any lower/upper case format. Certain Apache Airflow configuration property values are [blocked](/composer/docs/concepts/airflow-configurations), and cannot be overridden. | [optional] 
**cloud_data_lineage_integration** | [**CloudDataLineageIntegration**](CloudDataLineageIntegration.md) |  | [optional] 
**env_variables** | **Dict[str, str]** | Optional. Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes. Environment variable names must match the regular expression &#x60;a-zA-Z_*&#x60;. They cannot specify Apache Airflow software configuration overrides (they cannot match the regular expression &#x60;AIRFLOW__[A-Z0-9_]+__[A-Z0-9_]+&#x60;), and they cannot match any of the following reserved names: * &#x60;AIRFLOW_HOME&#x60; * &#x60;C_FORCE_ROOT&#x60; * &#x60;CONTAINER_NAME&#x60; * &#x60;DAGS_FOLDER&#x60; * &#x60;GCP_PROJECT&#x60; * &#x60;GCS_BUCKET&#x60; * &#x60;GKE_CLUSTER_NAME&#x60; * &#x60;SQL_DATABASE&#x60; * &#x60;SQL_INSTANCE&#x60; * &#x60;SQL_PASSWORD&#x60; * &#x60;SQL_PROJECT&#x60; * &#x60;SQL_REGION&#x60; * &#x60;SQL_USER&#x60; | [optional] 
**image_version** | **str** | The version of the software running in the environment. This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression &#x60;composer-([0-9]+(\\.[0-9]+\\.[0-9]+(-preview\\.[0-9]+)?)?|latest)-airflow-([0-9]+(\\.[0-9]+(\\.[0-9]+)?)?)&#x60;. When used as input, the server also checks if the provided version is supported and denies the request for an unsupported version. The Cloud Composer portion of the image version is a full [semantic version](https://semver.org), or an alias in the form of major version number or &#x60;latest&#x60;. When an alias is provided, the server replaces it with the current Cloud Composer version that satisfies the alias. The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified. When an alias is provided, the server replaces it with the latest Apache Airflow version that satisfies the alias and is supported in the given Cloud Composer version. In all cases, the resolved image version is stored in the same field. See also [version list](/composer/docs/concepts/versioning/composer-versions) and [versioning overview](/composer/docs/concepts/versioning/composer-versioning-overview). | [optional] 
**pypi_packages** | **Dict[str, str]** | Optional. Custom Python Package Index (PyPI) packages to be installed in the environment. Keys refer to the lowercase package name such as \&quot;numpy\&quot; and values are the lowercase extras and version specifier such as \&quot;&#x3D;&#x3D;1.12.0\&quot;, \&quot;[devel,gcp_api]\&quot;, or \&quot;[devel]&gt;&#x3D;1.8.2, &lt;1.9.2\&quot;. To specify a package without pinning it to a version specifier, use the empty string as the value. | [optional] 
**python_version** | **str** | Optional. The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes. Can be set to &#39;2&#39; or &#39;3&#39;. If not specified, the default is &#39;3&#39;. Cannot be updated. This field is only supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use Python major version 3. | [optional] 
**scheduler_count** | **int** | Optional. The number of schedulers for Airflow. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*. | [optional] 
**web_server_plugins_mode** | **str** | Optional. Whether or not the web server uses custom plugins. If unspecified, the field defaults to &#x60;PLUGINS_ENABLED&#x60;. This field is supported for Cloud Composer environments in versions composer-3.*.*-airflow-*.*.* and newer. | [optional] 

## Example

```python
from openapi_client.models.software_config import SoftwareConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareConfig from a JSON string
software_config_instance = SoftwareConfig.from_json(json)
# print the JSON string representation of the object
print(SoftwareConfig.to_json())

# convert the object into a dict
software_config_dict = software_config_instance.to_dict()
# create an instance of SoftwareConfig from a dict
software_config_from_dict = SoftwareConfig.from_dict(software_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


