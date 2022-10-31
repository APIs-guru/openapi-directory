package shared




type EnvironmentTypeEnum string

const (
    EnvironmentTypeEnumWindowsContainer EnvironmentTypeEnum = "WINDOWS_CONTAINER"
EnvironmentTypeEnumLinuxContainer EnvironmentTypeEnum = "LINUX_CONTAINER"
EnvironmentTypeEnumLinuxGpuContainer EnvironmentTypeEnum = "LINUX_GPU_CONTAINER"
EnvironmentTypeEnumArmContainer EnvironmentTypeEnum = "ARM_CONTAINER"
EnvironmentTypeEnumWindowsServer2019Container EnvironmentTypeEnum = "WINDOWS_SERVER_2019_CONTAINER"
)


