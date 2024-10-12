# HostIsolationMode

Specifies the isolation mode of main entry point of a code package when it's host type is ContainerHost. This is specified as part of container host policies in application manifest while importing service manifest. Possible values are following.    - None - Indicates the isolation mode is not applicable for given HostType. The value is 0.   - Process - This is the default isolation mode for a ContainerHost. The value is 1.   - HyperV - Indicates the ContainerHost is a Hyper-V container. This applies to only Windows containers. The value is 2. 

## Enum

* `NONE` (value: `'None'`)

* `PROCESS` (value: `'Process'`)

* `HYPERV` (value: `'HyperV'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


