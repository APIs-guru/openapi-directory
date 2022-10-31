package shared




type MetricNameEnum string

const (
    MetricNameEnumCPU MetricNameEnum = "Cpu"
MetricNameEnumMemory MetricNameEnum = "Memory"
MetricNameEnumEbsReadOpsPerSecond MetricNameEnum = "EBS_READ_OPS_PER_SECOND"
MetricNameEnumEbsWriteOpsPerSecond MetricNameEnum = "EBS_WRITE_OPS_PER_SECOND"
MetricNameEnumEbsReadBytesPerSecond MetricNameEnum = "EBS_READ_BYTES_PER_SECOND"
MetricNameEnumEbsWriteBytesPerSecond MetricNameEnum = "EBS_WRITE_BYTES_PER_SECOND"
MetricNameEnumDiskReadOpsPerSecond MetricNameEnum = "DISK_READ_OPS_PER_SECOND"
MetricNameEnumDiskWriteOpsPerSecond MetricNameEnum = "DISK_WRITE_OPS_PER_SECOND"
MetricNameEnumDiskReadBytesPerSecond MetricNameEnum = "DISK_READ_BYTES_PER_SECOND"
MetricNameEnumDiskWriteBytesPerSecond MetricNameEnum = "DISK_WRITE_BYTES_PER_SECOND"
MetricNameEnumNetworkInBytesPerSecond MetricNameEnum = "NETWORK_IN_BYTES_PER_SECOND"
MetricNameEnumNetworkOutBytesPerSecond MetricNameEnum = "NETWORK_OUT_BYTES_PER_SECOND"
MetricNameEnumNetworkPacketsInPerSecond MetricNameEnum = "NETWORK_PACKETS_IN_PER_SECOND"
MetricNameEnumNetworkPacketsOutPerSecond MetricNameEnum = "NETWORK_PACKETS_OUT_PER_SECOND"
)


