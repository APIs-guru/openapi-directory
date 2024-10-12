# CheckUpgradeRequest

Request to check whether image upgrade will succeed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_version** | **str** | The version of the software running in the environment. This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression &#x60;composer-([0-9]+(\\.[0-9]+\\.[0-9]+(-preview\\.[0-9]+)?)?|latest)-airflow-([0-9]+(\\.[0-9]+(\\.[0-9]+)?)?)&#x60;. When used as input, the server also checks if the provided version is supported and denies the request for an unsupported version. The Cloud Composer portion of the image version is a full [semantic version](https://semver.org), or an alias in the form of major version number or &#x60;latest&#x60;. When an alias is provided, the server replaces it with the current Cloud Composer version that satisfies the alias. The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified. When an alias is provided, the server replaces it with the latest Apache Airflow version that satisfies the alias and is supported in the given Cloud Composer version. In all cases, the resolved image version is stored in the same field. See also [version list](/composer/docs/concepts/versioning/composer-versions) and [versioning overview](/composer/docs/concepts/versioning/composer-versioning-overview). | [optional] 

## Example

```python
from openapi_client.models.check_upgrade_request import CheckUpgradeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CheckUpgradeRequest from a JSON string
check_upgrade_request_instance = CheckUpgradeRequest.from_json(json)
# print the JSON string representation of the object
print(CheckUpgradeRequest.to_json())

# convert the object into a dict
check_upgrade_request_dict = check_upgrade_request_instance.to_dict()
# create an instance of CheckUpgradeRequest from a dict
check_upgrade_request_from_dict = CheckUpgradeRequest.from_dict(check_upgrade_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


