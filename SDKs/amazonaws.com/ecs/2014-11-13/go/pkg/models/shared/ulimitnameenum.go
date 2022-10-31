package shared




type UlimitNameEnum string

const (
    UlimitNameEnumCore UlimitNameEnum = "core"
UlimitNameEnumCPU UlimitNameEnum = "cpu"
UlimitNameEnumData UlimitNameEnum = "data"
UlimitNameEnumFsize UlimitNameEnum = "fsize"
UlimitNameEnumLocks UlimitNameEnum = "locks"
UlimitNameEnumMemlock UlimitNameEnum = "memlock"
UlimitNameEnumMsgqueue UlimitNameEnum = "msgqueue"
UlimitNameEnumNice UlimitNameEnum = "nice"
UlimitNameEnumNofile UlimitNameEnum = "nofile"
UlimitNameEnumNproc UlimitNameEnum = "nproc"
UlimitNameEnumRss UlimitNameEnum = "rss"
UlimitNameEnumRtprio UlimitNameEnum = "rtprio"
UlimitNameEnumRttime UlimitNameEnum = "rttime"
UlimitNameEnumSigpending UlimitNameEnum = "sigpending"
UlimitNameEnumStack UlimitNameEnum = "stack"
)


