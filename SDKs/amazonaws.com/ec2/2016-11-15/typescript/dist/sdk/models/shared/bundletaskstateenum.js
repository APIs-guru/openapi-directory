export var BundleTaskStateEnum;
(function (BundleTaskStateEnum) {
    BundleTaskStateEnum["Pending"] = "pending";
    BundleTaskStateEnum["WaitingForShutdown"] = "waiting-for-shutdown";
    BundleTaskStateEnum["Bundling"] = "bundling";
    BundleTaskStateEnum["Storing"] = "storing";
    BundleTaskStateEnum["Cancelling"] = "cancelling";
    BundleTaskStateEnum["Complete"] = "complete";
    BundleTaskStateEnum["Failed"] = "failed";
})(BundleTaskStateEnum || (BundleTaskStateEnum = {}));
